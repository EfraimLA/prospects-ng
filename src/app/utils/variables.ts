export const riskLevel = (score: any): string => {
  if (score < 50) {
    return 'Bajo';
  } else if (score < 80) {
    return 'Medio';
  } else {
    return 'Alto'
  }
}
