export function clickOutside(
    element: HTMLElement,
    callbackFunction: () => void
  ): { update(newCallbackFunction: () => void): void; destroy(): void } {
    function onClick(event: MouseEvent) {
      if (!element.contains(event.target as Node)) {
        callbackFunction();
      }
    }
  
    document.body.addEventListener('click', onClick);
  
    return {
      update(newCallbackFunction: () => void) {
        callbackFunction = newCallbackFunction;
      },
      destroy() {
        document.body.removeEventListener('click', onClick);
      },
    };
  }
  