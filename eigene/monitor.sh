read -p "start(1) stop(2): " CHOICE

if [[ "$CHOICE" == "1" ]]; then
    sudo airmon-ng check kill >/dev/null 2>&1
    sudo airmon-ng start wlan0
    iwconfig
    
elif [[ "$CHOICE" == "2" ]]; then
    sudo airmon-ng stop wlan0mon
    sudo ip link set wlan0 down
    sudo iw dev wlan0 set type managed
    sudo ip link set wlan0 up
    sudo systemctl restart NetworkManager
    iwconfig
    
else
    exit
fi