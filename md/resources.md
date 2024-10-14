**Hayden Taylor** <br>
**27-11-2023** <br>

[TOC]

# Config


create a file in `/etc/interception/dual-function-keys/mappings.yml`. this is where the configuration specific to the dual-function-keys plugin will go

add the following to the file:

```
MAPPINGS:
  - KEY: KEY_CAPSLOCK
    TAP: KEY_ESC
    HOLD: KEY_LEFTCTRL

  - KEY: KEY_LEFTSHIFT
    TAP: KEY_BACKSPACE
    HOLD: KEY_LEFTSHIFT

  - KEY: KEY_RIGHTSHIFT
    TAP: KEY_DELETE
    HOLD: KEY_RIGHTSHIFT
```

`KEY` determines the key to modify, `TAP` defines what it should be rebound to when tapped, and `HOLD` defines rebinding when held