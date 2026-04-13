# Realistic Call App

Yeh ek simple realistic dialer web app hai jisme aap number dial kar sakte ho, call UI dekh sakte ho, aur mobile device par `Call` button dabate hi phone dialer open ho jata hai (`tel:` link ke through).

## Features

- Realistic dial pad (0-9, `*`, `#`)
- India-style default prefix `+91`
- Calling / Connected / Ended status
- Live call timer
- Mute aur Speaker toggle buttons
- Clear input button

## Run locally

```bash
# project folder me jao
cd /workspace/Social-service-app-

# Python se static server run karo
python3 -m http.server 8080
```

Phir browser me open karo:

`http://localhost:8080`

## Important note

- Browser web app **direct telecom voice call** khud se establish nahi kar sakti bina backend/VoIP service ke.
- Is project me real phone app launch ke liye `tel:` protocol use hua hai.
- Agar aapko internet-based real in-app voice call chahiye ho (WebRTC + signaling + TURN/STUN), woh next version me add kiya ja sakta hai.
