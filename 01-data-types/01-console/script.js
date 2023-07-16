// Log number
console.log(101);

// Log string
console.log('Hello JS World');

// Log multiple values
console.log(20, 'Hello There', true);

// Log a variable
const x = 101;
console.log(x);

// Console error & warning
console.error('Alert');
console.warn('Warning');

// Log object as table
console.table({ name: 'Mahesh Jadhav', email: 'dev.msj2409@gmail.com' });

// Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: white; color: blue';
console.log('%cHello There World', styles);