import { SvelteComponent } from "svelte";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import MyComponentSvelte from "../lib/MyComponent.svelte";

type MyComponentProps = {
  text: string;
};

const MyComponent = forwardRef((props: MyComponentProps, ref) => {
  const svelteRef = useRef<SvelteComponent | null>(null);

  useImperativeHandle(ref, () => ({
    updateText(newText: string) {
      svelteRef.current?.$$set({ text: newText });
    },
  }));

  return (
    <div ref={(node) => {
      if (node && !svelteRef.current) {
        svelteRef.current = new MyComponentSvelte({
          target: node,
          props,
        });
      }
    }} />
  );
});

export default MyComponent;
