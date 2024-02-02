import { BehaviorSubject } from 'rxjs';

class ServiceMenu {
  private isOpen = new BehaviorSubject<boolean>(false);

  toggleMenu(isOpen: boolean): void {
    this.isOpen.next(isOpen);
  }

  getMenuState(): BehaviorSubject<boolean> {
    return this.isOpen;
  }
}

const menuService = new ServiceMenu();
export default menuService;
