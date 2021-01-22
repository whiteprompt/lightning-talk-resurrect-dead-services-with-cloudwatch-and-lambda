const got = require('got');
const serviceRemediator = require('./helpers/service-remediation');

module.exports = {
  async requester() {
    let ok = true;
    const uri = process.env.TEST_URI || 'https://1234567890.execute-api.us-east-1.amazonaws.com/dev/test';

    try {
      const response = await got(uri);
      console.log(response.body);
    } catch (e) {
      ok = false;
      console.log(e);
    }

    return {
      ok
    }
  },
  async responder() {
    const statusCode = process.env.TEST_STATUS || 200;
    const data = process.env.TEST_MESSAGE || 'Ok';
    const ok = parseInt(statusCode) < 400;
    const body = JSON.stringify({ok, data});

    console.log(`${process.env.TEST_MESSAGE} ${statusCode}`);

    return {
      statusCode,
      body
    }
  },
  async alarmStateChange(event) {
    let ok;

    try {
      if (event.detail.state === 'ALARM' && event.detail.previousState === 'OK') {
        const restartServiceData = await serviceRemediator.restartServiceFromAlarm(event);
        ok = restartServiceData.ok;
      }
    } catch (e) {
      ok = false;
    }

    return {
      ok
    }
  }
}
