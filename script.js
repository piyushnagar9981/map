class NewMap {
    constructor() {
      this.items = {};
      this.length = 0;
    }
  
    // Set a key-value pair
    set(key, value) {
      if (!this.has(key)) {
        this.length++;
      }
      this.items[key] = value;
    }
  
    // Get a value by key
    get(key) {
      return this.has(key) ? this.items[key] : undefined;
    }
  
    // Check if the map contains a key
    has(key) {
      return Object.prototype.hasOwnProperty.call(this.items, key);
    }
  
    // Delete a key-value pair
    delete(key) {
      if (this.has(key)) {
        delete this.items[key];
        this.length--;
      }
    }
  
    // Clear all key-value pairs
    clear() {
      this.items = {};
      this.length = 0;
    }
  
    // Get the size of the map
    size() {
      return this.length;
    }
  
    // execute a callback function
    forEach(callback) {
      for (const key in this.items) {
        if (this.has(key)) {
          callback(this.items[key], key, this);
        }
      }
    }
  
    // Get an iterator of key-value pairs
    entries() {
      return Object.entries(this.items);
    }
  
    // Get an iterator of keys
    keys() {
      return Object.keys(this.items);
    }
  
    // Get an iterator of values
    values() {
      return Object.values(this.items);
    }
  
    // Group items by a provided key
    groupBy(key) {
      const groupedMap = new NewMap();
      this.forEach((value, currentKey) => {
        const groupKey = key(value, currentKey);
        if (!groupedMap.has(groupKey)) {
          groupedMap.set(groupKey, []);
        }
        groupedMap.get(groupKey).push(value);
      });
      return groupedMap;
    }
  }
  
  // Example usage:
  const myMap = new NewMap();
  
  document.getElementById('setBtn').addEventListener('click', () => {
    myMap.set('name', 'John');
    myMap.set('age', 30);
    myMap.set('city', 'New York');
    document.getElementById('result').textContent = 'Key-Value pair added.';
  });
  
  document.getElementById('getBtn').addEventListener('click', () => {
    const value = myMap.get('name');
    document.getElementById('result').textContent = `Value for 'name': ${value}`;
  });
  
  document.getElementById('hasBtn').addEventListener('click', () => {
    const hasKey = myMap.has('age');
    document.getElementById('result').textContent = `Map has 'age' key: ${hasKey}`;
  });
  
  document.getElementById('deleteBtn').addEventListener('click', () => {
    myMap.delete('age');
    document.getElementById('result').textContent = 'Key-Value pair deleted.';
  });
  
  document.getElementById('clearBtn').addEventListener('click', () => {
    myMap.clear();
    document.getElementById('result').textContent = 'Map cleared.';
  });
  
  document.getElementById('sizeBtn').addEventListener('click', () => {
    const size = myMap.size();
    document.getElementById('result').textContent = `Map size: ${size}`;
  });
  
  document.getElementById('forEachBtn').addEventListener('click', () => {
    let output = 'Map content:\n';
    myMap.forEach((value, key) => {
      output += `${key}: ${value}\n`;
    });
    document.getElementById('result').textContent = output;
  });
  
  document.getElementById('entriesBtn').addEventListener('click', () => {
    const entries = [...myMap.entries()];
    document.getElementById('result').textContent = `Entries: ${JSON.stringify(entries)}`;
  });
  
  document.getElementById('keysBtn').addEventListener('click', () => {
    const keys = [...myMap.keys()];
    document.getElementById('result').textContent = `Keys: ${keys.join(', ')}`;
  });
  
  document.getElementById('valuesBtn').addEventListener('click', () => {
    const values = [...myMap.values()];
    document.getElementById('result').textContent = `Values: ${values.join(', ')}`;
  });
  
  document.getElementById('groupByBtn').addEventListener('click', () => {
    const groupedMap = myMap.groupBy((value, key) => key.length);
    const entries = [...groupedMap.entries()];
    document.getElementById('result').textContent = `Grouped map: ${JSON.stringify(entries)}`;
  });
  