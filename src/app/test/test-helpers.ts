import { Pipe, Directive, Component } from '@angular/core';

export function mockPipe(options: Pipe, transformFun?: (...args: any[]) => any): Pipe {
    const metadata: Pipe = {
      name: options.name
    };
    return Pipe(metadata)(class MockPipe {
        transform(value: any, ...args: any[]) {
            if (transformFun) {
                return transformFun(value, ...args);
            }
        }
    }) as any;
}

export function mockDirective(options: Component): Directive {
    const metadata: Directive = {
        selector: options.selector,
        inputs: options.inputs,
        outputs: options.outputs
    };
    return Directive(metadata)(class MockDirective { }) as any;
}
