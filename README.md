# Cisco Projekt

## Firmierung

### Candy Shop

![alt text](logo.png)

Der Candy Shop ist ein kleines Unternehmen, welches sich auf den Verkauf von Süßigkeiten spezialisiert hat.

Das Unternehmen hat nur einen Standort und beschäftigt 9 Mitarbeiter.



### Abteilungen

<details>

<summary>Buchhaltung</summary>

### Anforderungen

- Keine Mobilen geräte benoetigt
- Einen Drucker für Rechnungen
- Einen Scanner für Belege

</details>

<details>

<summary>Sales</summary>

### Anforderungen

- Mobiles und Agiles Arbeiten

</details>

<details>

<summary>Lager</summary>

### Anforderungen

- Ausgestattet mit Smartphones
- IoT Geräte für einfachere Lagerverwaltung

</details>

### Namenskonzept der Geräte

| Name        | Pattern              |
| ----------- | -------------------- |
| Lager       | `sto-<type>-<index>` |
| Sales       | `sal-<type>-<index>` |
| Buchhaltung | `acc-<type>-<index>` |
| Server      | `srv-<type>-<index>` |

Alle Internen Abteilungen bekommen daher das Netz:

`192.168.1.0/24`

Das "virtuelle" Internet bekommt das Netz:

`192.168.2.0/24`

## Passwoerter

### Switches

| Name        | Wert               | Type        |
| ----------- | ------------------ | ----------- |
| `core-sw`   | `7wj4VEvUeDS3Dj8H` | `EXEC Mode` |
| `core-sw`   | `wSg1OQ10gfgxBUcr` | `Console`   |
| `core-sw`   | `cfpjy3ofdv2I8rBs` | `SSH`       |
| `sal-sw-01` | `aZJpipWh49qzEFou` | `EXEC Mode` |
| `sal-sw-01` | `cz52cIHn3GU9o06e` | `Console`   |
| `sal-sw-01` | `SSLkMPnkkObYK7D2` | `SSH`       |
| `sto-sw-01` | `su9VsoAd99JaZ7Pk` | `EXEC Mode` |
| `sto-sw-01` | `EzKo1GCHwca5aIVx` | `Console`   |
| `sto-sw-01` | `v7b2djoI1e2od8Db` | `SSH`       |
| `srv-sw-01` | `F5jZCXeFeRDz20Bt` | `EXEC Mode` |
| `srv-sw-01` | `OHCfOBQsamH3HASi` | `Console`   |
| `srv-sw-01` | `6UW4LUKsPyfNlmG8` | `SSH`       |
| `acc-sw-01` | `yAyn0tdvFPFs9DD6` | `EXEC Mode` |
| `acc-sw-01` | `7j6Zg4t4YegeDn5K` | `Console`   |
| `acc-sw-01` | `1JsM1Je7zH9JvKiJ` | `SSH`       |

Username aller SSH Zugriffe ist `admin`

### Addressierungstabelle

| Name            | Interface   | IP Address      | Subnet Mask / CIDR-Suffix | Default Gateway |
| --------------- | ----------- | --------------- | ------------------------- | --------------- |
| `Core-RT`       | `G/1/0`     | `192.168.2.1`   | `255.255.255.0`           | `N/A*`          |
| `Core-RT`       | `G/0/0`     | `192.168.1.1`   | `255.255.255.0`           | `N/A*`          |
| `Core-SW`       | `VLAN1`     | `192.168.1.240` | `255.255.255.0`           | `192.168.1.1`   |
| `SAL-SW-01`     | `VLAN1`     | `192.168.1.241` | `255.255.255.0`           | `192.168.1.1`   |
| `STO-SW-01`     | `VLAN1`     | `192.168.1.242` | `255.255.255.0`           | `192.168.1.1`   |
| `SRV-SW-01`     | `VLAN1`     | `192.168.1.243` | `255.255.255.0`           | `192.168.1.1`   |
| `ACC-SW-01`     | `VLAN1`     | `192.168.1.244` | `255.255.255.0`           | `192.168.1.1`   |
| `ACC-PC-01`     | `NIC`       | `DHCP`          | `255.255.255.0`           | `192.168.1.1`   |
| `ACC-PC-02`     | `NIC`       | `DHCP`          | `255.255.255.0`           | `192.168.1.1`   |
| `ACC-PC-03`     | `NIC`       | `DHCP`          | `255.255.255.0`           | `192.168.1.1`   |
| `ACC-PR-01`     | `NIC`       | `DHCP`          | `255.255.255.0`           | `192.168.1.1`   |
| `SRV-DHCP-01`   | `NIC`       | `192.168.1.254` | `255.255.255.0`           | `192.168.1.1`   |
| `SRV-DNS-01`    | `NIC`       | `192.168.1.253` | `255.255.255.0`           | `192.168.1.1`   |
| `SRV-RADIUS-01` | `NIC`       | `192.168.1.252` | `255.255.255.0`           | `192.168.1.1`   |
| `SRV-WLC-01`    | `NIC`       | `192.168.1.231` | `255.255.255.0`           | `192.168.1.1`   |
| `STO-AP-01`     | `G0`        | `DHCP`          | `255.255.255.0`           | `192.168.1.1`   |
| `STO-PHO-01`    | `WIRELESS0` | `DHCP`          | `255.255.255.0`           | `192.168.1.1`   |
| `STO-PHO-02`    | `WIRELESS0` | `DHCP`          | `255.255.255.0`           | `192.168.1.1`   |
| `STO-SBC-01`    | `G0`        | `192.168.1.230` | `255.255.255.0`           | `192.168.1.1`   |
| `SAL-AP-01`     | `G0`        | `DHCP`          | `255.255.255.0`           | `192.168.1.1`   |
| `SAL-PC-01`     | `NIC`       | `DHCP`          | `255.255.255.0`           | `192.168.1.1`   |
| `SAL-PC-02`     | `NIC`       | `DHCP`          | `255.255.255.0`           | `192.168.1.1`   |
| `SAL-NB-01`     | `WIRELESS0` | `DHCP`          | `255.255.255.0`           | `192.168.1.1`   |
| `SAL-NB-02`     | `WIRELESS0` | `DHCP`          | `255.255.255.0`           | `192.168.1.1`   |

### Weitere Infos

- Bei allen Geräten wurden alle unnötigen Ports herausgebaut und gegen Cover ersetz
- Alle Switche wurden zu Glasfaser Switchen umgebaut
- Alle Geraerte (So lange es moeglich war) wurden auf mindestens ein Gigabit Interface umgebaut
- Die Konfiguration der WLC APs werden nach restart nicht mehr angezeigt, sind aber gespeichert (Bekanntes Problem)

#### AP Authentifizierung

In der Aufgabe beschrieben wurde, dass die Clients sich mit PSK Authentifizieren sollen.

Ich habe mich etwas weiter ausgelebt und habe ein RADIUS Server aufgesetzt, welcher die Authentifizierung übernimmt.

**Damit kann eine Zentrale Benutzerverwaltung durchgeführt werden, was ein hoher Sicherheitsgewinn ist.**

### Notes

Cover
IoT
Website
Core-Router