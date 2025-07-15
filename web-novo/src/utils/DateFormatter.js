export class DateFormatter {
  constructor(locale = 'pt-BR') {
    this.locale = locale
  }

  format(isoDateString, options = {}) {
    const date = new Date(isoDateString)

    const defaultOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }

    const formatter = new Intl.DateTimeFormat(this.locale, {
      ...defaultOptions,
      ...options,
    })

    return formatter.format(date)
  }
}
