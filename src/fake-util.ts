import { Helpers } from "./helpers";

export class FakeUtil {
  getFullNameCapitalized(firstName: string, lastName: string): string {
    return `${Helpers.capitalize(firstName)} ${Helpers.capitalize(lastName)}`;
  }
}
