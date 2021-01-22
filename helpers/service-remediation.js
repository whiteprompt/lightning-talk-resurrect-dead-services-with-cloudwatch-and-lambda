module.exports = {
  async restartServiceFromAlarm (event) {
    console.log('Remediating based on event');
    console.log(JSON.stringify(event, null, 2));
    // bootstrap your service remediation logic here
    return {ok: true};
  }
}
