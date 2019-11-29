import { CourseDurationPipe } from './course-duration.pipe';

describe('CourseDurationPipe', () => {

  const pipe = new CourseDurationPipe();

  it('when duration less than 60 minutes than without hours', () => {
    let duration = 55;
    let expected = `${duration} min`;
    expect(pipe.transform(duration)).toBe(expected);
  });

  it('when duration equal to 60 minutes than without hours', () => {
    let duration = 60;
    let expected = `1h `;
    expect(pipe.transform(duration)).toBe(expected);
  });

  it('when duration greater than 60 minutes than with hours and minutes', () => {
    let duration = 88;
    let expected = `1h 28 min`;
    expect(pipe.transform(duration)).toBe(expected);
  });
});
