interface IntervalOpts {
  timeout?: number;
}

export class Timeout {
  private timeoutId: any;
  private timeout: number = 5000;

  constructor(opts?: IntervalOpts) {
    if (opts?.timeout) {
      this.timeout = opts.timeout;
    }
  }

  start = (callback: () => void) => {
    this.stop();
    this.timeoutId = setTimeout(() => {
      callback();
    }, this.timeout);

    return this.stop;
  };

  stop = () => {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  };
}
