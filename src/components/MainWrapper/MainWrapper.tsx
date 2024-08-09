import { MainWrapperProps } from './MainWrapper.types';
import css from './MainWrapper.module.scss';

export default function MainWrapper({ children }: MainWrapperProps) {
  return <main className={css.main}>{children}</main>;
}
