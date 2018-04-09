export default {
  initialState: {
    activeTab: 0,
    isLoading: false,
    bookingDetails: {
      name: ``,
      phone: ``,
      email: ``,
      message: ``
    },
    date: ``,
    timeRange: ``,
    numberOfGuests: 0,
    summary: {
      message: ``,
      error: ``
    },
    value: 0
  },
  dateFormat: `YYYY/MM/DD`,
  locale: `en-us`,
  momentLocale: `en-ie`,
  APIEntryPoint: `http://www.mocky.io/v2/5acb796c2f00004f00411609`
};
