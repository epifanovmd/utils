interface IntervalOpts {
  timeout?: number;
}

export class Interval {
  private intervalId: any;
  private timeout: number = 5000;

  constructor(opts?: IntervalOpts) {
    if (opts?.timeout) {
      this.timeout = opts.timeout;
    }
  }

  start = (callback: () => void) => {
    this.stop();
    this.intervalId = setInterval(() => {
      callback();
    }, this.timeout);

    return this.stop;
  };

  stop = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  };
}
