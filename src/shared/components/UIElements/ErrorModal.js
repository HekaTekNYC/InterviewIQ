import React, { useRef } from "react";
import { Dialog } from "@headlessui/react";

const ErrorModal = (props) => {
  let completeButtonRef = useRef(null);
  return (
    <Dialog
      initialFocus={completeButtonRef}
      open={!!props.error}
      onClose={props.onClear}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-blue-400">
          <Dialog.Title className="text-lg font-bold">
            An Error Occurred!
          </Dialog.Title>
          <p className="my-4">{props.error}</p>
          <button
            className="btn-primary"
            ref={completeButtonRef}
            onClick={props.onClear}
          >
            Okay
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ErrorModal;
