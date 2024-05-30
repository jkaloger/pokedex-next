'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { Button } from './button';
import { XMarkIcon } from '@heroicons/react/24/solid';

export function Dialog({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog ref={dialogRef} className="backdrop:bg-black/30 bg-transparent" onClose={onDismiss}>
      {children}
      <Button onClick={onDismiss} className="absolute top-0 right-0" variant="destructive">
        <XMarkIcon className="h-6 w-6" />
      </Button>
    </dialog>,
    document.getElementById('modal-root')!
  );
}
