export class BinarySearchTree {
  _data: number;
  _left: BinarySearchTree | undefined;
  _right: BinarySearchTree | undefined;
  constructor(data: number) {
    this._data = data;
  }

  public get data(): number {
    return this._data;
  }

  public get right(): BinarySearchTree | undefined {
    return this._right;
  }

  public get left(): BinarySearchTree | undefined {
    return this._left;
  }

  public insert(item: number) {
    if (item <= this._data) {
      if (this._left) {
        this._left.insert(item)
      } else {
        this._left = new BinarySearchTree(item);
      }
    } else {
      if (this._right) {
        this._right.insert(item)
      } else {
        this._right = new BinarySearchTree(item);
      }
    }
  }

  public each(callback: (data: unknown) => unknown): unknown {
    throw new Error('Remove this statement and implement this function')
  }
}
