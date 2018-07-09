function gmailAutoArchiver() {
  
  // Thanks to fwed for the base code.  
  
  var delayDays = 1; // will only impact emails more than 24h old
  var maxDate = new Date();
  maxDate.setDate(maxDate.getDate()-delayDays); // what was the date at that time?

  // Get all the threads in the Inbox
  var threads = GmailApp.getInboxThreads(0,500)
  
  // we archive all the threads if they're read AND older than the limit we set in delayDays
  for (var i = 0; i < threads.length; i++) {
    if ((threads[i].getLastMessageDate()<maxDate) && !threads[i].isUnread())
    {
      threads[i].moveToArchive();
    }
  }
}
