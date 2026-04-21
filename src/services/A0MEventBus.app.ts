/**
 * A#0M EventBus.app
 * Centralized async messaging for the Sovereign Kernel.
 */
type EventCallback = (...args: any[]) => void;

class A0MEventBus {
  private events: Map<string, EventCallback[]> = new Map();

  on(event: string, callback: EventCallback) {
    if (!this.events.has(event)) this.events.set(event, []);
    this.events.get(event)?.push(callback);
    return () => this.off(event, callback);
  }

  off(event: string, callback: EventCallback) {
    const subs = this.events.get(event);
    if (!subs) return;
    this.events.set(event, subs.filter(cb => cb !== callback));
  }

  emit(event: string, ...args: any[]) {
    this.events.get(event)?.forEach(cb => cb(...args));
  }
}

export const eventBus = new A0MEventBus();
