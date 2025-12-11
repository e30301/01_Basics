read -p "start(1) stop(2): " CHOICE

if [[ "$CHOICE" == "1" ]]; then
    sudo ip link set wlan0 down
    sudo iw dev wlan0 set type monitor
    sudo ip link set wlan0 up
    iwconfig
    
elif [[ "$CHOICE" == "2" ]]; then
    sudo ip link set wlan0 down
    sudo iw dev wlan0 set type managed
    sudo ip link set wlan0 up
    sudo systemctl restart NetworkManager
    iwconfig
    
else
    exit
fi