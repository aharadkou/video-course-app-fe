import { CourseDurationPipe } from './course-duration.pipe';

describe('CourseDurationPipe', () => {

  const pipe = new CourseDurationPipe();

  it('when duration less than 60 minutes than without hours', () => {
    const duration = 55;
    const expected = `${duration}min`;
    expect(pipe.transform(duration)).toBe(expected);
  });

  it('when duration equal to 60 minutes than without hours', () => {
    const duration = 60;
    const expected = `1h `;
    expect(pipe.transform(duration)).toBe(expected);
  });

  it('when duration greater than 60 minutes than with hours and minutes', () => {
    const duration = 88;
    const expected = `1h 28min`;
    expect(pipe.transform(duration)).toBe(expected);
  });
});
