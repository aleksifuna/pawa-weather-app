export function celciusToFahrenheit(celsius: number): number {
  return celsius * 1.8 + 32;
}
export function fahrenheitToCelcius(fahrenheit: number): number {
  return (fahrenheit - 32) / 1.8;
}
