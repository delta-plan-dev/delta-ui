export type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

export type ReplaceProps<Inner extends React.ElementType, P> = Omit<
  React.ComponentPropsWithRef<Inner>,
  P
> &
  P;

export interface DeltaPrefixAndClassNameOnlyProps {
  bsPrefix?: string;
  className?: string;
}

export interface DeltaPrefixProps<
  As extends React.ElementType = React.ElementType
> extends DeltaPrefixAndClassNameOnlyProps {
  as?: As;
}

export interface DeltaPrefixRefForwardingComponent<
  TInitial extends React.ElementType,
  P = unknown
> {
  <As extends React.ElementType = TInitial>(
    props: React.PropsWithChildren<ReplaceProps<As, DeltaPrefixProps<As> & P>>,
    context?: any,
  ): React.ReactElement | null;
  propTypes?: any;
  contextTypes?: any;
  defaultProps?: Partial<P>;
  displayName?: string;
}
