import React from 'react';

export type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

export type ReplaceProps<Inner extends React.ElementType, P> = Omit<
  React.ComponentPropsWithRef<Inner>,
  P
> &
  P;

export interface Props<As extends React.ElementType = React.ElementType> {
  as?: As;
  className?: string;
}

export interface RefForwardingComponent<
  TInitial extends React.ElementType,
  P = unknown
> {
  <As extends React.ElementType = TInitial>(
    props: React.PropsWithChildren<ReplaceProps<As, Props<As> & P>>,
    context?: any
  ): React.ReactElement | null;

  propTypes?: any;
  contextTypes?: any;
  defaultProps?: Partial<P>;
  displayName?: string;
}
