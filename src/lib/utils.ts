import React from "react";
import { twMerge } from "tailwind-merge";

/**
 * Clone React element.
 * The function clones React element and adds Tailwind CSS classnames to the cloned element
 * @param element the React element to clone
 * @param classNames Tailwind CSS classnames
 * @returns { React.ReactElement } - Cloned React element
 * @example cloneElement(<div />, "text-center text-cyan-500") // => <div className="text-center text-cyan-500" />
 */
export function cloneElement(element: React.ReactElement, classNames: string) {
  return React.cloneElement(element, {
    className: twMerge(element.props.className, classNames)
  });
}

