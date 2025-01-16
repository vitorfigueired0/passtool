 ____               _              _ 
|  _ \ __ _ ___ ___| |_ ___   ___ | |
| |_) / _` / __/ __| __/ _ \ / _ \| |
|  __/ (_| \__ \__ \ || (_) | (_) | |
|_|   \__,_|___/___/\__\___/ \___/|_|

## **Description**
**passtool** is a command-line tool for generating secure passwords with customizable options.

---

## **Installation**
To install passtool globally, use npm:  
```bash
npm install -g passtool
```

---

## **Usage**

### **Command Overview**
- **`passtool --help`**: Displays the list of available commands and their descriptions.

### **Options**
1. **`-c, --special-characters`**  
   Adds special characters to the generated password.  

2. **`-s, --size <number>`**  
   Specifies the length of the generated password.  
   Default: `12`.  

### **Examples**
Generate a password with default settings:
```bash
passtool
```

Generate a password with special characters:
```bash
passtool -c
```

Generate a password of 16 characters:
```bash
passtool -s 16
```

Generate a password with special characters and a length of 20:
```bash
passtool -c -s 20
```

---

### **Enjoy secure password generation with passtool!**