type Button =
  | {
      tag: "button";
    }
  | { tag: "a"; href: `https://${string}.${string}` };

type ButtonProps<T> = {
  [K in keyof T]: T[K];
};

const button: ButtonProps<Button> = {
  tag: "a",
  href: "https://wtf.com",
};
