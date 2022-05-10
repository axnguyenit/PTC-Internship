import React, { FormEventHandler, ReactNode } from 'react';

export interface FormikProviderProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export default function FormikProvider({
  children,
  onSubmit,
}: FormikProviderProps) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
