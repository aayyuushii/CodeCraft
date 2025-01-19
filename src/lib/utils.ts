import clsx from "clsx";

export const cn = (...classes: (string | undefined)[]) => {
  return clsx(classes);
};