type Element = {
  type: string;
  value: string;
};

class TokenBuilder {
  elements: string[];

  constructor(data: Element[] = []) {
    if (!Array.isArray(data)) {
      throw new Error("Invalid data type, expected an array.");
    }
    this.elements = [];
    for (let i = 0; i < data.length; i++) {
      const { type, value } = data[i];
      this.elements.push(`${type}=${value}`);
    }
  }

  add(element: Element) {
    if (typeof element !== "object" || Array.isArray(element)) {
      throw new Error("Invalid element type, expected an object.");
    }
    const { type, value } = element;
    this.elements.push(`${type}=${value}`);
  }

  getToken(): string {
    const base64Elements = this.elements.map((element) => btoa(element));
    return base64Elements.join(".");
  }
}

class TokenParser {
  elements: Element[];

  constructor(token: string) {
    const base64Elements = token.split(".");
    this.elements = [];
    for (let i = 0; i < base64Elements.length; i++) {
      const decodedElement = atob(base64Elements[i]);
      const [type, value] = decodedElement.split("=");
      this.elements.push({ type, value });
    }
  }
}

export { TokenBuilder, TokenParser };
