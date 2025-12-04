const dgram = require("dgram");
const dnsPacket = require("dns-packet");

const HOST = "192.168.0.242";
const PORT = 9999;

const server = dgram.createSocket("udp4");

// In-memory zone data
// Each domain can have one or more RR types.
const db = {
  "example.com": { A: "1.2.3.4" },
  "foo.example.com": { CNAME: "bar.example.com" },
  "bar.example.com": { A: "9.9.9.9" },
  "google.com": { A: "8.8.8.8"}
};

// Lookup helper
function lookup(name, type) {
  const zone = db[name];
  if (!zone) {
    return null;
  }
  return zone[type] || null;
}

server.on("error", (err) => {
  console.error("Server error:", err);
  server.close();
});

server.on("message", (msg, rinfo) => {
  try {
    const req = dnsPacket.decode(msg);

    // We handle only 1 question – standard for simple servers
    const q = req.questions[0];
    const qname = q.name;
    const qtype = q.type;

    const record = lookup(qname, qtype);

    let answers = [];

    // If we have a matching record, provide it
    if (record) {
      answers.push({
        name: qname,
        type: qtype,
        class: "IN",
        data: record
      });
    }

    // Build a NOERROR response, even if no answers exist
    const response = dnsPacket.encode({
      type: "response",
      id: req.id,
      flags: dnsPacket.AUTHORITATIVE_ANSWER,
      questions: req.questions,
      answers
    });

    server.send(response, rinfo.port, rinfo.address);

  } catch (err) {
    console.error("Error processing message:", err);
  }
});

server.bind(PORT, HOST, () => {
  console.log(`DNS server running on ${HOST}:${PORT}`);
});
