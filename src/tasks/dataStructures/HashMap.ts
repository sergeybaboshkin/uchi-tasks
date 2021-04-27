class Slot {
  public hashCode: number;
  public key: any;
  public value: any;

  constructor(hasCode: number, key: any, value: any) {
    this.hashCode = hasCode; 
    this.key = key;
    this.value = value;
  }
}

class Dummy {}

export class HashMap {
  private fill: number;
  private used: number;
  private slots: Slot[];

  constructor(pairs?: { key: any, value: any}[]) {
    this.slots = new Array(8);
    this.fill = 0;
    this.used = 0;

    if (pairs) {
      pairs.forEach(({key, value}) => {
        this.setItem({key, value });
      })
    }
  }

  private findIdxItem(key: any): number {
    const hashCode = this.getHashCode(key);
    let idx = hashCode % this.slots.length;
    
    while (typeof this.slots[idx] !== 'undefined') {
      if (this.slots[idx].hashCode === hashCode && this.slots[idx].key === key) return idx;
      idx = (idx + 1) % this.slots.length;
    }

    return -1;
  }

  public deleteItem(key: any): void {
    const idx = this.findIdxItem(key);

    if (idx >= 0) {
      this.used -= 1;
      this.slots[idx].key = new Dummy();
      this.slots[idx].value = null;
    }
  }

  public getItem(key: any): Slot {
    const idx = this.findIdxItem(key);

    return this.slots[idx];
  }

  public setItem({ key, value}: {key: any, value: any}) {
    const hashCode = this.getHashCode(key);
    let idx = hashCode % this.slots.length;
    let targetIdx;

    while (typeof this.slots[idx] !== 'undefined') {
      if (this.slots[idx].hashCode === hashCode && this.slots[idx].key === key) {
        targetIdx = idx;
        break;
      };
      if (!targetIdx && this.slots[idx].key instanceof Dummy) {
        targetIdx = idx;
      }
      idx = (idx + 1) % this.slots.length;
    }
    
    if (typeof targetIdx === 'undefined') {
      targetIdx = idx;
    }

    if (typeof this.slots[targetIdx] === 'undefined') {
      this.used += 1;
      this.fill += 1;
    } else if (this.slots[targetIdx]?.key instanceof Dummy) {
      this.used += 1;
    }

    this.slots[targetIdx] = new Slot(hashCode, key, value);

    if (this.fill * 3 >= this.slots.length * 2) {
      this.resize();
    }
  }

  private getHashCode(value: any): number{
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
      const character = value.charCodeAt(i);
      hash = ((hash<<5) - hash) + character;
      hash = hash & hash;
    }
    
    return Math.abs(hash);
  }

  private resize() {
    const oldSlots = this.slots;
    const newSize = this.findClosestSize(this.used * 2)
    this.slots = new Array(newSize);
    this.fill = this.used;
    oldSlots.forEach((slot) => {      
      if (slot?.key && !(slot.key instanceof Dummy)) {
        let idx = slot.hashCode % this.slots.length;
        while (typeof this.slots[idx] !== 'undefined') {
          idx = (idx + 1) % this.slots.length;
        }
        this.slots[idx] = new Slot(slot.hashCode, slot.key, slot.value);
      }
    })
  }

  private findClosestSize(minUsed: number): number {
    let newSize = 8;
    while (newSize <= minUsed) {
      newSize *= 2; 
    }
    return newSize;
  }
}
