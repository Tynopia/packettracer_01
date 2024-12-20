# Cisco Projekt

## Firmierung

### Candy Shop

![Logo des Candy Shops](logo.png)

Der **Candy Shop** ist ein kleines Unternehmen, das sich auf den Verkauf von Süßigkeiten spezialisiert hat.

Das Unternehmen hat nur einen Standort und beschäftigt neun Mitarbeiter.

## Abteilungen

<details>
<summary>Buchhaltung</summary>

### Anforderungen

- Keine mobilen Geräte benötigt
- Ein Drucker für Rechnungen
- Ein Scanner für Belege
- Geräte für drei Mitarbeiter

</details>

<details>
<summary>Sales</summary>

### Anforderungen

- Mobiles und agiles Arbeiten
- Zugriff auf das zentrale System über WLAN oder mobile Geräte
- Geräte für vier Mitarbeiter

</details>

<details>
<summary>Lager</summary>

### Anforderungen

- Ausstattung mit Smartphones
- IoT-Geräte zur Vereinfachung der Lagerverwaltung (z. B. für Bestandsüberwachung und Produktlokalisierung)
- Geräte für zwei Mitarbeiter

</details>

## Namenskonzept der Geräte

| Abteilung   | Namensschema         |
| ----------- | -------------------- |
| Lager       | `sto-<type>-<index>` |
| Sales       | `sal-<type>-<index>` |
| Buchhaltung | `acc-<type>-<index>` |
| Server      | `srv-<type>-<index>` |

### Netzwerke

- **Internes Netzwerk:** `192.168.1.0/24`
- **Externes/virtuelles Internet:** `192.168.2.0/24`

## Passwörter

### Switches

| Name        | Passwort           | Modus     |
| ----------- | ------------------ | --------- |
| `core-rt`   | `Dz83NJ048q0j6T5J` | EXEC Mode |
| `core-rt`   | `M1C8HPMmGGFLAYot` | Console   |
| `core-rt`   | `Il68ZJVGZf1P2Jvw` | SSH       |
| `core-sw`   | `7wj4VEvUeDS3Dj8H` | EXEC Mode |
| `core-sw`   | `wSg1OQ10gfgxBUcr` | Console   |
| `core-sw`   | `cfpjy3ofdv2I8rBs` | SSH       |
| `sal-sw-01` | `aZJpipWh49qzEFou` | EXEC Mode |
| `sal-sw-01` | `cz52cIHn3GU9o06e` | Console   |
| `sal-sw-01` | `SSLkMPnkkObYK7D2` | SSH       |
| `sto-sw-01` | `su9VsoAd99JaZ7Pk` | EXEC Mode |
| `sto-sw-01` | `EzKo1GCHwca5aIVx` | Console   |
| `sto-sw-01` | `v7b2djoI1e2od8Db` | SSH       |
| `srv-sw-01` | `F5jZCXeFeRDz20Bt` | EXEC Mode |
| `srv-sw-01` | `OHCfOBQsamH3HASi` | Console   |
| `srv-sw-01` | `6UW4LUKsPyfNlmG8` | SSH       |
| `acc-sw-01` | `yAyn0tdvFPFs9DD6` | EXEC Mode |
| `acc-sw-01` | `7j6Zg4t4YegeDn5K` | Console   |
| `acc-sw-01` | `1JsM1Je7zH9JvKiJ` | SSH       |

> **Hinweis:** Der Benutzername für alle SSH-Zugriffe ist `admin`.

## Addressierungstabelle

| Name            | Interface | IP Address    | Subnet Mask / CIDR-Suffix | Default Gateway |
| --------------- | --------- | ------------- | ------------------------- | --------------- |
| Core-RT         | G/1/0     | 192.168.2.1   | 255.255.255.0             | N/A*            |
| Core-RT         | G/0/0     | 192.168.1.1   | 255.255.255.0             | N/A*            |
| Core-SW         | VLAN1     | 192.168.1.240 | 255.255.255.0             | 192.168.1.1     |
| SAL-SW-01       | VLAN1     | 192.168.1.241 | 255.255.255.0             | 192.168.1.1     |
| STO-SW-01       | VLAN1     | 192.168.1.242 | 255.255.255.0             | 192.168.1.1     |
| SRV-SW-01       | VLAN1     | 192.168.1.243 | 255.255.255.0             | 192.168.1.1     |
| ACC-SW-01       | VLAN1     | 192.168.1.244 | 255.255.255.0             | 192.168.1.1     |
| ACC-PC-01       | NIC       | DHCP          | 255.255.255.0             | 192.168.1.1     |
| ACC-PC-02       | NIC       | DHCP          | 255.255.255.0             | 192.168.1.1     |
| ACC-PC-03       | NIC       | DHCP          | 255.255.255.0             | 192.168.1.1     |
| ACC-PR-01       | NIC       | DHCP          | 255.255.255.0             | 192.168.1.1     |
| SRV-DHCP-01     | NIC       | 192.168.1.254 | 255.255.255.0             | 192.168.1.1     |
| SRV-DNS-01      | NIC       | 192.168.1.253 | 255.255.255.0             | 192.168.1.1     |
| SRV-RADIUS-01   | NIC       | 192.168.1.252 | 255.255.255.0             | 192.168.1.1     |
| SRV-HTTP-STO-01 | NIC       | 192.168.1.251 | 255.255.255.0             | 192.168.1.1     |
| SRV-WLC-01      | NIC       | 192.168.1.231 | 255.255.255.0             | 192.168.1.1     |
| STO-AP-01       | G0        | DHCP          | 255.255.255.0             | 192.168.1.1     |
| STO-PHO-01      | WIRELESS0 | DHCP          | 255.255.255.0             | 192.168.1.1     |
| STO-PHO-02      | WIRELESS0 | DHCP          | 255.255.255.0             | 192.168.1.1     |
| STO-SBC-01      | G0        | 192.168.1.230 | 255.255.255.0             | 192.168.1.1     |
| SAL-AP-01       | G0        | DHCP          | 255.255.255.0             | 192.168.1.1     |
| SAL-PC-01       | NIC       | DHCP          | 255.255.255.0             | 192.168.1.1     |
| SAL-PC-02       | NIC       | DHCP          | 255.255.255.0             | 192.168.1.1     |
| SAL-NB-01       | WIRELESS0 | DHCP          | 255.255.255.0             | 192.168.1.1     |
| SAL-NB-02       | WIRELESS0 | DHCP          | 255.255.255.0             | 192.168.1.1     |

## Weitere Informationen

- Alle unnötigen Ports wurden entfernt und mit Abdeckungen versehen.
- Alle Switche wurden auf Glasfaser umgerüstet.
- Alle Geräte verfügen mindestens über ein Gigabit-Interface (soweit möglich).
- Die Konfiguration der WLC-APs wird nach einem Neustart nicht angezeigt, bleibt aber gespeichert (bekanntes Problem).
- Im Physical Mode wurden alle Geräte ordentlich geordnet und beschriftet.

## AP-Authentifizierung

In der ursprünglichen Aufgabe war PSK-Authentifizierung vorgesehen. Es wurde stattdessen ein **RADIUS-Server** aufgesetzt, um die Benutzer zentral zu verwalten. 

**Vorteile:**
- Erhöhte Sicherheit
- Einfache Verwaltung der Zugangsdaten

## IoT / HTTP-Seite

Ein **IoT-System** wurde entwickelt, um den Kauf und Versand von Süßigkeiten zu vereinfachen.

> **Hinweis:** Der Cisco Packet Tracer benötigt bei komplexen HTTP-Seiten möglicherweise einige Sekunden zum Laden.

### Aus Kundensicht

1. Besuchen Sie die Website: `http://candy.shop`
2. Klicken Sie auf "Jetzt Einkaufen".
3. Wählen Sie Süßigkeiten aus (einige Produkte können ausverkauft sein).
4. Die Daten sind zentral gespeichert und von jedem Gerät aus zugänglich.

### Aus Lagersicht

1. Bei einer Bestellung ertönt ein Alarm.
2. Mitarbeiter sehen die Bestellung und können die Süßigkeiten verpacken.
3. Beim Klick auf "Im Lager markieren" leuchtet eine LED am Lagerort des Produkts.
4. Nach dem Klick auf "Verpackt" erlischt die LED, und die Bestellung wird als "Versandt" markiert.

> **Hinweis:** Eine neue Bestellung aktiviert die LED des neuen Produkts und markiert die alte Bestellung automatisch als "Versandt".

### Code

- Der Code ist auf dem Gerät `STO-SBC-01` unter `iot.js` gespeichert.
- Die HTTP-Seite wurde in **Vite React TypeScript** entwickelt.
