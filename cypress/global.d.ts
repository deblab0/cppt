declare namespace Cypress {
  interface Chainable {
    waitForAngular(options?: Cypress.Timeoutable): Chainable<void>;
    changeRowsCount(): Chainable<JQuery<>>;
    i18n(): Chainable<I18n>;
    login(): Chainable<void>;
    resetTable(): Chainable<void>;
    selectDropdownElement(nbr: string): Chainable<void>;
    selectMultiDropdownElement(nbr: string): Chainable<void>;
    selectMultiSearchDropdownElement(nbr: string, value: string): Chainable<void>;
    selectSearchDropdownElement(nbr: string, value: string): Chainable<void>;
    selectLazyDropdownElement(nbr: string): Chainable<void>;
    selectSearchLazyDropdownElement(nbr: string, value: string): Chainable<void>;
    getMany<T>(names: string[]): Chainable<T[]>;
    tooltipContent(path: string): Chainable<void>;
    clickThreeDotsModifyBtn(): Chainable<void>;
    datePicker(date: string): Chainable<void>;
    dateRangePicker(date: Date): Chainable<void>;
    dateFrString(date: Date): Chainable<string>;
    checksTableColumnsFiltering(): Chainable<void>;
    checkSuccessToast(): Chainable<void>;
    translate(key: string): Chainable<string> | undefined;
    checkListActifValue(): Chainable<void>;
    selectRandomDropdownElement(type?: string): Chainable<void>;
    testReduireAgrandir(j: number, x?: number): Chainable<void>;
    isAngularStable(options?: Cypress.Timeoutable): Chainable<boolean>;
    hidesColumnChecksTable(searchBtnId: string): Chainable<void>;
  }

  interface Cypress {
    env(key: string): string;
    config(key: string): string;
  }

  interface Window {
    getAngularTestability(rootElement: Node): Testability;
    getAllAngularRootElements(): Node[];
  }
}

interface Testability {
  isStable(): boolean;
  whenStable(callback: () => void, timeout?: number): void;
}

type BinariosError = {
  message: string,
  code: string,
  content: string,
  details: unknown,
};

type BinariosResponse<T> = {
  data?: T,
  error?: BinariosError,
  timestamp: number,
  code: string,
};
