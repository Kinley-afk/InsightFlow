## Logout
- Click user avatar → Sign Out → redirected to /login instead of /

## Survey Editor
- Read @context/ui-context.md and redesign the ui interface.
- when we choose checkbox, it is showing radiobutton in ui

## Survey Sharing
- Both survey Link and conversational link is not working.  
- After giving the response the the survey list is not updating the responses column and completion rate.

## Public Survey Experience
- http://localhost:5173/s/<slug> doesn't works, but http://localhost:5173/s/<id> works.
- radiobutton doesn't gets checked or shows a dot when it is chosen.
- only when have radiobutton or multiple choice question, it is loading else it's throwing errors

## Google forms import
- when I add valid google forms url, importing fails and throws error saying:

A connection issue was detected. Please check your network and retry.

Check your internet connection and click Retry.

even when we have a stable internet connection.

- when we click on retry import, it is redirecting to initial google forms card where we need to again re-enter the url

## Audiences
- when we successfully create the audience it is redirecting to /audiences instead of /audiences/<id>


# Detail
- no "Upload contacts"
- two upload csv button
- After importing the valid csv file, upload contact card doesn't vanish

## Email campaign
- rearrange the scheduling panel, waste space left in bottom
- on clicking prepare send, save draft it does nothing or neither is saved in the campaign list. 

## Background Jobs
- my TRIGGER_SECRET_KEY is set in dev

## Survey Analytics
- on writing /dashboard/analytics/surveys/:id, the analytics is same for all, not dynamic to the surveys.
- the analytics is displayed same even for the surveys not created or id doesn't exist.

- The above two problem applies to overview, campaigns and engagement.
- it is not dynamic to the surveys.

## Simulation mode
- read @context/ui-context.md and redesign the ui
- no delete persona option
- count cannot be changed after NaN
- on clicking run synthetic execution, it does nothing
- workspace, runs and analytics do nothing

## PDF reports
-  optional sections are already checked
- on clicking the section, it redirects to a blank page
- On viewing the dummy data it shows the dummy data, not dynamic to surveys

- /dashboard is not dynamic to the surveys created, responses, campaigns and completion rate

console result:
INFO 2026-05-24 03:39:46,427 basehttp "GET /api/v1/health/ HTTP/1.1" 200 43
INFO 2026-05-24 03:39:47,924 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 410
INFO 2026-05-24 03:39:51,754 basehttp "GET /api/v1/health/ HTTP/1.1" 200 43
INFO 2026-05-24 03:39:53,661 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 410
INFO 2026-05-24 03:39:55,783 basehttp "OPTIONS /api/v1/audiences/ HTTP/1.1" 200 0
INFO 2026-05-24 03:39:55,865 basehttp "GET /api/v1/audiences/ HTTP/1.1" 200 39
INFO 2026-05-24 03:40:03,991 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 410
INFO 2026-05-24 03:40:12,450 basehttp "GET /api/v1/surveys/18/ HTTP/1.1" 200 408
INFO 2026-05-24 03:40:12,456 basehttp "GET /api/v1/surveys/18/questions/ HTTP/1.1" 200 195
INFO 2026-05-24 03:40:15,031 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 410
INFO 2026-05-24 03:41:49,277 basehttp "GET /api/v1/public/surveys/18/ HTTP/1.1" 200 256
INFO 2026-05-24 03:41:53,706 basehttp "POST /api/v1/public/surveys/18/submit/ HTTP/1.1" 201 55
INFO 2026-05-24 03:42:06,170 basehttp "GET /api/v1/health/ HTTP/1.1" 200 43
INFO 2026-05-24 03:42:08,774 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 410
INFO 2026-05-24 03:42:10,844 basehttp "GET /api/v1/audiences/ HTTP/1.1" 200 39
INFO 2026-05-24 03:42:12,209 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 410
INFO 2026-05-24 03:43:23,863 basehttp "GET /api/v1/surveys/18/questions/ HTTP/1.1" 200 195
INFO 2026-05-24 03:43:23,867 basehttp "GET /api/v1/surveys/18/ HTTP/1.1" 200 408
INFO 2026-05-24 03:43:25,432 basehttp "GET /api/v1/surveys/18/questions/ HTTP/1.1" 200 195
INFO 2026-05-24 03:43:25,445 basehttp "GET /api/v1/surveys/18/ HTTP/1.1" 200 408
INFO 2026-05-24 03:43:31,355 basehttp "PATCH /api/v1/questions/30/ HTTP/1.1" 200 185
INFO 2026-05-24 03:43:31,437 basehttp "GET /api/v1/surveys/18/questions/ HTTP/1.1" 200 187
WARNING 2026-05-24 03:43:33,417 log Bad Request: /api/v1/questions/30/
WARNING 2026-05-24 03:43:33,421 basehttp "PATCH /api/v1/questions/30/ HTTP/1.1" 400 50
INFO 2026-05-24 03:43:33,494 basehttp "GET /api/v1/surveys/18/questions/ HTTP/1.1" 200 187
INFO 2026-05-24 03:43:34,565 basehttp "PATCH /api/v1/questions/30/ HTTP/1.1" 200 171
INFO 2026-05-24 03:43:34,643 basehttp "GET /api/v1/surveys/18/questions/ HTTP/1.1" 200 173
INFO 2026-05-24 03:43:37,142 basehttp "PATCH /api/v1/questions/30/ HTTP/1.1" 200 174
INFO 2026-05-24 03:43:37,257 basehttp "GET /api/v1/surveys/18/questions/ HTTP/1.1" 200 176
INFO 2026-05-24 03:43:38,620 basehttp "PATCH /api/v1/questions/30/ HTTP/1.1" 200 185
INFO 2026-05-24 03:43:38,677 basehttp "GET /api/v1/surveys/18/questions/ HTTP/1.1" 200 187
INFO 2026-05-24 03:43:41,816 basehttp "PATCH /api/v1/questions/30/ HTTP/1.1" 200 177
INFO 2026-05-24 03:43:41,888 basehttp "GET /api/v1/surveys/18/questions/ HTTP/1.1" 200 179
INFO 2026-05-24 03:43:42,689 basehttp "PATCH /api/v1/questions/30/ HTTP/1.1" 200 179
INFO 2026-05-24 03:43:42,794 basehttp "GET /api/v1/surveys/18/questions/ HTTP/1.1" 200 181
INFO 2026-05-24 03:43:44,154 basehttp "PATCH /api/v1/questions/30/ HTTP/1.1" 200 190
INFO 2026-05-24 03:43:44,219 basehttp "GET /api/v1/surveys/18/questions/ HTTP/1.1" 200 192
INFO 2026-05-24 03:43:46,560 basehttp "PATCH /api/v1/questions/30/ HTTP/1.1" 200 184
INFO 2026-05-24 03:43:46,634 basehttp "GET /api/v1/surveys/18/questions/ HTTP/1.1" 200 186
INFO 2026-05-24 03:43:48,323 basehttp "GET /api/v1/surveys/18/questions/ HTTP/1.1" 200 186
INFO 2026-05-24 03:43:48,323 basehttp "GET /api/v1/surveys/18/ HTTP/1.1" 200 399
INFO 2026-05-24 03:43:50,987 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 401
INFO 2026-05-24 03:43:54,751 basehttp "GET /api/v1/surveys/18/questions/ HTTP/1.1" 200 186
INFO 2026-05-24 03:43:54,759 basehttp "GET /api/v1/surveys/18/ HTTP/1.1" 200 399
INFO 2026-05-24 03:43:56,235 basehttp "GET /api/v1/surveys/18/questions/ HTTP/1.1" 200 186
INFO 2026-05-24 03:43:56,235 basehttp "GET /api/v1/surveys/18/ HTTP/1.1" 200 399
INFO 2026-05-24 03:43:58,528 basehttp "GET /api/v1/surveys/18/questions/ HTTP/1.1" 200 186
INFO 2026-05-24 03:43:58,531 basehttp "GET /api/v1/surveys/18/ HTTP/1.1" 200 399
INFO 2026-05-24 03:44:00,704 basehttp "GET /api/v1/surveys/18/ HTTP/1.1" 200 399
INFO 2026-05-24 03:44:00,721 basehttp "GET /api/v1/surveys/18/questions/ HTTP/1.1" 200 186
INFO 2026-05-24 03:44:04,631 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 401
INFO 2026-05-24 03:44:13,890 basehttp "POST /api/v1/surveys/ HTTP/1.1" 201 251
INFO 2026-05-24 03:44:13,923 basehttp "OPTIONS /api/v1/surveys/19/ HTTP/1.1" 200 0
INFO 2026-05-24 03:44:13,982 basehttp "GET /api/v1/surveys/19/ HTTP/1.1" 200 251
INFO 2026-05-24 03:44:13,991 basehttp "OPTIONS /api/v1/surveys/19/questions/ HTTP/1.1" 200 0
INFO 2026-05-24 03:44:14,057 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 39
INFO 2026-05-24 03:44:14,133 basehttp "POST /api/v1/surveys/19/questions/ HTTP/1.1" 201 194
INFO 2026-05-24 03:44:14,200 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 196
INFO 2026-05-24 03:44:16,730 basehttp "OPTIONS /api/v1/questions/31/ HTTP/1.1" 200 0
WARNING 2026-05-24 03:44:16,791 log Bad Request: /api/v1/questions/31/
WARNING 2026-05-24 03:44:16,791 basehttp "PATCH /api/v1/questions/31/ HTTP/1.1" 400 50
INFO 2026-05-24 03:44:16,858 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 196
INFO 2026-05-24 03:44:19,225 basehttp "PATCH /api/v1/questions/31/ HTTP/1.1" 200 181
INFO 2026-05-24 03:44:19,304 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 183
INFO 2026-05-24 03:44:22,375 basehttp "PATCH /api/v1/questions/31/ HTTP/1.1" 200 178
INFO 2026-05-24 03:44:22,452 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 180
INFO 2026-05-24 03:44:24,760 basehttp "PATCH /api/v1/questions/31/ HTTP/1.1" 200 189
INFO 2026-05-24 03:44:24,827 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 191
INFO 2026-05-24 03:44:28,927 basehttp "PATCH /api/v1/questions/31/ HTTP/1.1" 200 183
INFO 2026-05-24 03:44:29,004 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 185
INFO 2026-05-24 03:44:30,113 basehttp "PATCH /api/v1/questions/31/ HTTP/1.1" 200 187
INFO 2026-05-24 03:44:30,178 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 189
INFO 2026-05-24 03:44:33,292 basehttp "PATCH /api/v1/questions/31/ HTTP/1.1" 200 198
INFO 2026-05-24 03:44:33,365 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 200
INFO 2026-05-24 03:44:35,094 basehttp "PATCH /api/v1/questions/31/ HTTP/1.1" 200 190
INFO 2026-05-24 03:44:35,179 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 192
INFO 2026-05-24 03:44:36,297 basehttp "PATCH /api/v1/questions/31/ HTTP/1.1" 200 193
INFO 2026-05-24 03:44:36,364 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 195
INFO 2026-05-24 03:44:37,393 basehttp "PATCH /api/v1/questions/31/ HTTP/1.1" 200 195
INFO 2026-05-24 03:44:37,457 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 197
INFO 2026-05-24 03:44:39,067 basehttp "PATCH /api/v1/surveys/19/ HTTP/1.1" 200 413
INFO 2026-05-24 03:44:39,133 basehttp "GET /api/v1/surveys/19/ HTTP/1.1" 200 413
INFO 2026-05-24 03:44:40,758 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 197
INFO 2026-05-24 03:44:40,758 basehttp "GET /api/v1/surveys/19/ HTTP/1.1" 200 413
INFO 2026-05-24 03:44:43,227 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 778
INFO 2026-05-24 03:44:49,852 basehttp "GET /api/v1/public/surveys/19/ HTTP/1.1" 200 260
INFO 2026-05-24 03:44:49,948 basehttp "POST /api/v1/engagement/events/ HTTP/1.1" 201 103
INFO 2026-05-24 03:44:51,305 basehttp "POST /api/v1/engagement/events/ HTTP/1.1" 201 103
INFO 2026-05-24 03:45:29,230 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 778
INFO 2026-05-24 03:45:31,313 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 197
INFO 2026-05-24 03:45:31,313 basehttp "GET /api/v1/surveys/19/ HTTP/1.1" 200 413
INFO 2026-05-24 03:45:33,380 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 197
INFO 2026-05-24 03:45:33,383 basehttp "GET /api/v1/surveys/19/ HTTP/1.1" 200 413
INFO 2026-05-24 03:45:34,880 basehttp "POST /api/v1/surveys/19/questions/ HTTP/1.1" 201 194
INFO 2026-05-24 03:45:34,957 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 355
INFO 2026-05-24 03:45:39,126 basehttp "OPTIONS /api/v1/questions/32/ HTTP/1.1" 200 0
INFO 2026-05-24 03:45:39,305 basehttp "PATCH /api/v1/questions/32/ HTTP/1.1" 200 187
INFO 2026-05-24 03:45:39,385 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 348
WARNING 2026-05-24 03:45:41,848 log Bad Request: /api/v1/questions/32/
WARNING 2026-05-24 03:45:41,848 basehttp "PATCH /api/v1/questions/32/ HTTP/1.1" 400 50
INFO 2026-05-24 03:45:41,915 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 348
INFO 2026-05-24 03:45:43,880 basehttp "PATCH /api/v1/questions/32/ HTTP/1.1" 200 175
INFO 2026-05-24 03:45:43,947 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 336
INFO 2026-05-24 03:45:47,098 basehttp "PATCH /api/v1/questions/32/ HTTP/1.1" 200 174
INFO 2026-05-24 03:45:47,171 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 335
INFO 2026-05-24 03:45:48,549 basehttp "PATCH /api/v1/questions/32/ HTTP/1.1" 200 185
INFO 2026-05-24 03:45:48,621 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 346
INFO 2026-05-24 03:45:49,999 basehttp "PATCH /api/v1/questions/32/ HTTP/1.1" 200 177
INFO 2026-05-24 03:45:50,068 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 338
INFO 2026-05-24 03:45:51,616 basehttp "PATCH /api/v1/questions/32/ HTTP/1.1" 200 181
INFO 2026-05-24 03:45:51,682 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 342
INFO 2026-05-24 03:45:53,534 basehttp "GET /api/v1/surveys/19/ HTTP/1.1" 200 558
INFO 2026-05-24 03:45:53,542 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 342
INFO 2026-05-24 03:45:56,754 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 342
INFO 2026-05-24 03:45:56,765 basehttp "GET /api/v1/surveys/19/ HTTP/1.1" 200 558
INFO 2026-05-24 03:45:58,749 basehttp "POST /api/v1/surveys/19/questions/ HTTP/1.1" 201 194
INFO 2026-05-24 03:45:58,817 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 500
INFO 2026-05-24 03:46:02,130 basehttp "OPTIONS /api/v1/questions/33/ HTTP/1.1" 200 0
INFO 2026-05-24 03:46:02,199 basehttp "PATCH /api/v1/questions/33/ HTTP/1.1" 200 189
INFO 2026-05-24 03:46:02,276 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 495
INFO 2026-05-24 03:46:08,278 basehttp "PATCH /api/v1/questions/33/ HTTP/1.1" 200 183
INFO 2026-05-24 03:46:08,453 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 489
INFO 2026-05-24 03:46:09,685 basehttp "POST /api/v1/surveys/19/questions/ HTTP/1.1" 201 194
INFO 2026-05-24 03:46:09,760 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 647
INFO 2026-05-24 03:46:12,074 basehttp "OPTIONS /api/v1/questions/34/ HTTP/1.1" 200 0
WARNING 2026-05-24 03:46:12,149 log Bad Request: /api/v1/questions/34/
WARNING 2026-05-24 03:46:12,149 basehttp "PATCH /api/v1/questions/34/ HTTP/1.1" 400 50
INFO 2026-05-24 03:46:12,232 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 647
INFO 2026-05-24 03:46:16,017 basehttp "PATCH /api/v1/questions/34/ HTTP/1.1" 200 185
INFO 2026-05-24 03:46:16,083 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 638
INFO 2026-05-24 03:46:21,183 basehttp "PATCH /api/v1/questions/34/ HTTP/1.1" 200 175
INFO 2026-05-24 03:46:21,250 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 628
INFO 2026-05-24 03:46:22,084 basehttp "POST /api/v1/surveys/19/questions/ HTTP/1.1" 201 194
INFO 2026-05-24 03:46:22,159 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 786
INFO 2026-05-24 03:46:24,823 basehttp "OPTIONS /api/v1/questions/35/ HTTP/1.1" 200 0
INFO 2026-05-24 03:46:24,901 basehttp "PATCH /api/v1/questions/35/ HTTP/1.1" 200 188
INFO 2026-05-24 03:46:25,105 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 780
WARNING 2026-05-24 03:46:27,670 log Bad Request: /api/v1/questions/35/
WARNING 2026-05-24 03:46:27,670 basehttp "PATCH /api/v1/questions/35/ HTTP/1.1" 400 50
INFO 2026-05-24 03:46:27,735 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 780
INFO 2026-05-24 03:46:32,751 basehttp "PATCH /api/v1/questions/35/ HTTP/1.1" 200 192
INFO 2026-05-24 03:46:32,931 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 784
INFO 2026-05-24 03:46:34,005 basehttp "GET /api/v1/surveys/19/ HTTP/1.1" 200 1000
INFO 2026-05-24 03:46:34,005 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 784
INFO 2026-05-24 03:46:40,776 basehttp "GET /api/v1/public/surveys/19/ HTTP/1.1" 200 799
INFO 2026-05-24 03:47:11,300 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 1365
INFO 2026-05-24 03:47:12,686 basehttp "GET /api/v1/surveys/19/ HTTP/1.1" 200 1000
INFO 2026-05-24 03:47:12,687 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 784
INFO 2026-05-24 03:47:14,604 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 784
INFO 2026-05-24 03:47:14,604 basehttp "GET /api/v1/surveys/19/ HTTP/1.1" 200 1000
INFO 2026-05-24 03:47:25,765 basehttp "PATCH /api/v1/questions/32/ HTTP/1.1" 200 188
INFO 2026-05-24 03:47:25,824 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 791
INFO 2026-05-24 03:47:28,986 basehttp "GET /api/v1/surveys/19/ HTTP/1.1" 200 1007
INFO 2026-05-24 03:47:28,994 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 791
INFO 2026-05-24 03:47:35,135 basehttp "GET /api/v1/public/surveys/19/ HTTP/1.1" 200 806
INFO 2026-05-24 03:49:41,818 basehttp "GET /api/v1/public/surveys/19/ HTTP/1.1" 200 806
INFO 2026-05-24 03:50:00,966 basehttp "OPTIONS /api/v1/public/surveys/19/submit/ HTTP/1.1" 200 0
INFO 2026-05-24 03:50:01,039 basehttp "POST /api/v1/public/surveys/19/submit/ HTTP/1.1" 201 55
INFO 2026-05-24 03:50:25,373 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 1372
INFO 2026-05-24 03:51:38,008 basehttp "OPTIONS /api/v1/surveys/import/google/ HTTP/1.1" 200 0
WARNING 2026-05-24 03:51:38,028 log Not Found: /api/v1/surveys/import/google/
WARNING 2026-05-24 03:51:38,028 basehttp "POST /api/v1/surveys/import/google/ HTTP/1.1" 404 33150
INFO 2026-05-24 03:52:12,160 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 1372
WARNING 2026-05-24 03:52:15,974 log Not Found: /api/v1/surveys/import/google/
WARNING 2026-05-24 03:52:15,976 basehttp "POST /api/v1/surveys/import/google/ HTTP/1.1" 404 33150
WARNING 2026-05-24 03:52:29,640 log Not Found: /api/v1/surveys/import/google/
WARNING 2026-05-24 03:52:29,640 basehttp "POST /api/v1/surveys/import/google/ HTTP/1.1" 404 33150
WARNING 2026-05-24 03:54:20,045 log Not Found: /api/v1/surveys/import/google/
WARNING 2026-05-24 03:54:20,046 basehttp "POST /api/v1/surveys/import/google/ HTTP/1.1" 404 33150
INFO 2026-05-24 03:55:36,207 basehttp "GET /api/v1/surveys/19/questions/ HTTP/1.1" 200 791
INFO 2026-05-24 03:55:36,207 basehttp "GET /api/v1/surveys/19/ HTTP/1.1" 200 1007
INFO 2026-05-24 03:55:38,599 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 1372
WARNING 2026-05-24 03:55:54,252 log Not Found: /api/v1/surveys/import/google/
WARNING 2026-05-24 03:55:54,252 basehttp "POST /api/v1/surveys/import/google/ HTTP/1.1" 404 33150
INFO 2026-05-24 03:58:09,317 basehttp "GET /api/v1/audiences/ HTTP/1.1" 200 39
INFO 2026-05-24 03:58:21,753 basehttp "POST /api/v1/audiences/ HTTP/1.1" 201 180
INFO 2026-05-24 03:58:21,942 basehttp "GET /api/v1/audiences/ HTTP/1.1" 200 182
WARNING 2026-05-24 03:58:26,337 log Bad Request: /api/v1/audiences/
WARNING 2026-05-24 03:58:26,337 basehttp "POST /api/v1/audiences/ HTTP/1.1" 400 57
INFO 2026-05-24 03:58:34,950 basehttp "GET /api/v1/audiences/ HTTP/1.1" 200 182
INFO 2026-05-24 03:58:37,034 basehttp "OPTIONS /api/v1/audiences/3/ HTTP/1.1" 200 0
INFO 2026-05-24 03:58:37,034 basehttp "OPTIONS /api/v1/audiences/3/recipients/?limit=200&offset=0 HTTP/1.1" 200 0
INFO 2026-05-24 03:58:37,128 basehttp "GET /api/v1/audiences/3/ HTTP/1.1" 200 180
INFO 2026-05-24 03:58:37,138 basehttp "GET /api/v1/audiences/3/recipients/?limit=200&offset=0 HTTP/1.1" 200 84
INFO 2026-05-24 03:58:39,010 basehttp "GET /api/v1/audiences/ HTTP/1.1" 200 182
INFO 2026-05-24 03:59:11,449 basehttp "GET /api/v1/audiences/3/ HTTP/1.1" 200 180
INFO 2026-05-24 03:59:11,453 basehttp "GET /api/v1/audiences/3/recipients/?limit=200&offset=0 HTTP/1.1" 200 84
INFO 2026-05-24 04:05:59,967 basehttp "OPTIONS /api/v1/audiences/3/upload/ HTTP/1.1" 200 0
INFO 2026-05-24 04:06:00,110 basehttp "POST /api/v1/audiences/3/upload/ HTTP/1.1" 200 79
INFO 2026-05-24 04:06:00,225 basehttp "GET /api/v1/audiences/3/ HTTP/1.1" 200 7698
INFO 2026-05-24 04:06:00,374 basehttp "GET /api/v1/audiences/3/recipients/?limit=200&offset=0 HTTP/1.1" 200 7602
INFO 2026-05-24 04:07:25,489 basehttp "GET /api/v1/audiences/ HTTP/1.1" 200 7700
INFO 2026-05-24 04:07:28,943 basehttp "GET /api/v1/audiences/3/ HTTP/1.1" 200 7698
INFO 2026-05-24 04:07:32,416 basehttp "PATCH /api/v1/audiences/3/ HTTP/1.1" 200 7700
INFO 2026-05-24 04:07:32,495 basehttp "GET /api/v1/audiences/3/ HTTP/1.1" 200 7700
INFO 2026-05-24 04:07:32,977 basehttp "GET /api/v1/audiences/3/ HTTP/1.1" 200 7700
INFO 2026-05-24 04:07:32,999 basehttp "GET /api/v1/audiences/3/recipients/?limit=200&offset=0 HTTP/1.1" 200 7602
INFO 2026-05-24 04:07:35,301 basehttp "GET /api/v1/audiences/ HTTP/1.1" 200 7702
INFO 2026-05-24 04:08:01,218 basehttp "GET /api/v1/audiences/ HTTP/1.1" 200 7702
INFO 2026-05-24 04:08:01,218 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 1372
INFO 2026-05-24 04:10:53,834 basehttp "GET /api/v1/audiences/ HTTP/1.1" 200 7702
INFO 2026-05-24 04:11:00,145 basehttp "POST /api/v1/audiences/ HTTP/1.1" 201 182
INFO 2026-05-24 04:11:00,378 basehttp "GET /api/v1/audiences/ HTTP/1.1" 200 7848
INFO 2026-05-24 04:11:03,001 basehttp "GET /api/v1/audiences/3/recipients/?limit=200&offset=0 HTTP/1.1" 200 7602
INFO 2026-05-24 04:11:03,001 basehttp "GET /api/v1/audiences/3/ HTTP/1.1" 200 7700
INFO 2026-05-24 04:11:15,373 basehttp "POST /api/v1/audiences/3/upload/ HTTP/1.1" 200 78
INFO 2026-05-24 04:11:15,486 basehttp "GET /api/v1/audiences/3/ HTTP/1.1" 200 7846
INFO 2026-05-24 04:11:15,502 basehttp "GET /api/v1/audiences/3/recipients/?limit=200&offset=0 HTTP/1.1" 200 7748
INFO 2026-05-24 04:11:21,768 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 1372
INFO 2026-05-24 04:11:21,768 basehttp "GET /api/v1/audiences/ HTTP/1.1" 200 7994
INFO 2026-05-24 04:12:52,677 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 1372
INFO 2026-05-24 04:12:52,686 basehttp "GET /api/v1/audiences/ HTTP/1.1" 200 7994
INFO 2026-05-24 04:13:12,249 basehttp "GET /api/v1/audiences/ HTTP/1.1" 200 7994
INFO 2026-05-24 04:13:14,378 basehttp "OPTIONS /api/v1/audiences/4/ HTTP/1.1" 200 0
INFO 2026-05-24 04:13:14,383 basehttp "OPTIONS /api/v1/audiences/4/recipients/?limit=200&offset=0 HTTP/1.1" 200 0
INFO 2026-05-24 04:13:14,460 basehttp "GET /api/v1/audiences/4/ HTTP/1.1" 200 182
INFO 2026-05-24 04:13:14,480 basehttp "GET /api/v1/audiences/4/recipients/?limit=200&offset=0 HTTP/1.1" 200 84
INFO 2026-05-24 04:13:24,834 basehttp "OPTIONS /api/v1/audiences/4/upload/ HTTP/1.1" 200 0
INFO 2026-05-24 04:13:24,981 basehttp "POST /api/v1/audiences/4/upload/ HTTP/1.1" 200 78
INFO 2026-05-24 04:13:25,054 basehttp "GET /api/v1/audiences/4/ HTTP/1.1" 200 327
INFO 2026-05-24 04:13:25,132 basehttp "GET /api/v1/audiences/4/recipients/?limit=200&offset=0 HTTP/1.1" 200 229
INFO 2026-05-24 04:13:30,170 basehttp "GET /api/v1/audiences/ HTTP/1.1" 200 8139
INFO 2026-05-24 04:13:33,725 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 1372
INFO 2026-05-24 04:13:33,753 basehttp "GET /api/v1/audiences/ HTTP/1.1" 200 8139
INFO 2026-05-24 04:17:48,020 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 1372
INFO 2026-05-24 04:17:48,020 basehttp "GET /api/v1/audiences/ HTTP/1.1" 200 8139
INFO 2026-05-24 04:26:02,510 basehttp "OPTIONS /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 200 0
INFO 2026-05-24 04:26:02,621 basehttp "GET /api/v1/surveys/ HTTP/1.1" 200 1372
INFO 2026-05-24 04:26:02,651 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 200 83
WARNING 2026-05-24 04:28:54,716 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:28:54,722 log Unauthorized: /api/v1/surveys/
WARNING 2026-05-24 04:28:54,722 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:28:54,722 basehttp "GET /api/v1/surveys/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:28:55,743 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:28:55,749 log Unauthorized: /api/v1/surveys/
WARNING 2026-05-24 04:28:55,749 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:28:55,749 basehttp "GET /api/v1/surveys/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:29:04,073 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:29:04,073 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:29:05,091 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:29:05,091 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:29:13,422 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:29:13,422 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:29:14,444 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:29:14,444 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:29:22,462 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:29:22,462 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:29:23,485 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:29:23,485 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:29:31,813 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:29:31,813 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:29:32,829 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:29:32,829 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:29:41,172 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:29:41,172 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:29:42,192 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:29:42,194 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:29:50,527 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:29:50,527 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:29:51,550 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:29:51,552 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:29:59,870 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:29:59,872 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:30:00,886 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:30:00,886 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:31:16,349 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:31:16,351 log Unauthorized: /api/v1/surveys/
WARNING 2026-05-24 04:31:16,351 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:31:16,354 basehttp "GET /api/v1/surveys/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:31:17,371 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:31:17,374 log Unauthorized: /api/v1/surveys/
WARNING 2026-05-24 04:31:17,374 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:31:17,374 basehttp "GET /api/v1/surveys/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:31:25,687 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:31:25,687 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:31:26,707 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:31:26,707 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:31:53,379 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:31:53,381 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:31:54,404 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:31:54,404 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:32:02,427 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:32:02,427 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:32:03,455 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:32:03,455 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:32:11,479 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:32:11,481 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:32:12,487 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:32:12,492 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:32:14,152 log Unauthorized: /api/v1/surveys/
WARNING 2026-05-24 04:32:14,152 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:32:14,152 basehttp "GET /api/v1/surveys/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:32:14,154 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:32:15,257 log Unauthorized: /api/v1/surveys/
WARNING 2026-05-24 04:32:15,257 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:32:15,257 basehttp "GET /api/v1/surveys/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:32:15,257 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:32:23,589 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:32:23,589 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:32:24,609 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:32:24,609 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:32:32,933 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:32:32,933 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:32:33,955 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:32:33,955 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:32:42,298 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:32:42,298 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:32:43,310 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:32:43,310 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:32:51,643 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:32:51,643 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:32:52,655 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:32:52,655 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:33:00,971 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:33:00,971 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:33:01,991 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:33:01,991 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:33:10,316 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:33:10,316 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:33:11,328 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:33:11,328 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:33:19,655 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:33:19,655 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:33:20,676 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:33:20,676 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:33:28,989 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:33:28,989 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:33:30,023 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:33:30,023 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:33:38,361 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:33:38,361 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:33:39,370 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:33:39,370 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:33:47,687 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:33:47,687 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:33:48,699 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:33:48,701 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:33:57,027 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:33:57,029 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:33:58,043 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:33:58,043 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:05,569 log Unauthorized: /api/v1/audiences/
WARNING 2026-05-24 04:34:05,571 basehttp "GET /api/v1/audiences/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:06,895 log Unauthorized: /api/v1/audiences/
WARNING 2026-05-24 04:34:06,895 basehttp "GET /api/v1/audiences/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:07,160 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:34:07,163 log Unauthorized: /api/v1/surveys/
WARNING 2026-05-24 04:34:07,163 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:07,163 basehttp "GET /api/v1/surveys/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:08,180 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:34:08,180 log Unauthorized: /api/v1/surveys/
WARNING 2026-05-24 04:34:08,180 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:08,180 basehttp "GET /api/v1/surveys/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:16,502 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:34:16,502 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:17,524 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:34:17,524 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:25,550 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:34:25,550 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:26,880 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:34:26,883 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
INFO 2026-05-24 04:34:34,521 basehttp "OPTIONS /api/v1/simulation/runs/ HTTP/1.1" 200 0
WARNING 2026-05-24 04:34:34,526 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:34:34,526 basehttp "POST /api/v1/simulation/runs/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:34,903 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:34:34,903 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:35,713 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:34:35,713 basehttp "POST /api/v1/simulation/runs/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:35,920 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:34:35,920 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:38,880 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:34:38,880 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:39,892 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:34:39,892 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:41,957 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:34:41,963 log Unauthorized: /api/v1/surveys/
WARNING 2026-05-24 04:34:41,963 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:41,963 basehttp "GET /api/v1/surveys/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:42,987 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:34:42,990 log Unauthorized: /api/v1/surveys/
WARNING 2026-05-24 04:34:42,990 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:42,990 basehttp "GET /api/v1/surveys/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:51,310 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:34:51,315 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:34:52,335 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:34:52,335 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:35:01,131 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:35:01,131 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:35:02,146 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:35:02,146 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:35:10,475 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:35:10,475 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:35:11,499 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:35:11,499 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:35:19,834 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:35:19,836 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:35:20,845 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:35:20,845 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:35:29,181 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:35:29,184 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:35:30,196 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:35:30,197 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:35:38,525 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:35:38,525 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:35:39,555 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:35:39,555 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:35:47,885 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:35:47,885 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:35:48,904 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:35:48,904 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:35:56,922 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:35:56,926 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:35:57,935 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:35:57,936 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:35:58,810 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:35:58,810 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:35:59,820 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:35:59,823 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:07,837 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:07,837 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:08,854 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:08,862 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:12,394 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:12,396 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:13,540 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:13,540 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:19,792 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:19,792 log Unauthorized: /api/v1/surveys/
WARNING 2026-05-24 04:36:19,792 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:19,792 basehttp "GET /api/v1/surveys/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:20,814 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:20,815 log Unauthorized: /api/v1/surveys/
WARNING 2026-05-24 04:36:20,817 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:20,819 basehttp "GET /api/v1/surveys/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:23,058 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:23,059 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:24,073 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:24,073 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:24,547 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:24,547 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:25,645 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:25,645 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:29,274 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:29,274 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:30,292 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:30,292 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:32,904 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:32,904 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:33,926 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:33,926 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:35,495 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:35,495 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:36,580 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:36,580 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:39,422 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:39,422 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:40,446 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:40,446 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:48,772 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:48,772 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:49,796 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:49,798 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:57,812 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:57,812 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:36:58,842 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:36:58,844 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:37:06,861 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:37:06,861 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:37:07,897 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:37:07,899 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:37:15,908 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:37:15,908 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:37:16,939 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:37:16,939 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:37:24,953 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:37:24,953 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:37:25,976 log Unauthorized: /api/v1/simulation/runs/
WARNING 2026-05-24 04:37:25,976 basehttp "GET /api/v1/simulation/runs/?limit=20&offset=0 HTTP/1.1" 401 31
WARNING 2026-05-24 04:37:37,132 log Unauthorized: /api/v1/surveys/
WARNING 2026-05-24 04:37:37,135 basehttp "GET /api/v1/surveys/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:37:38,146 log Unauthorized: /api/v1/surveys/
WARNING 2026-05-24 04:37:38,146 basehttp "GET /api/v1/surveys/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:37:39,593 log Unauthorized: /api/v1/health/
WARNING 2026-05-24 04:37:39,594 basehttp "GET /api/v1/health/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:37:40,607 log Unauthorized: /api/v1/health/
WARNING 2026-05-24 04:37:40,607 basehttp "GET /api/v1/health/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:38:44,688 log Unauthorized: /api/v1/health/
WARNING 2026-05-24 04:38:44,688 basehttp "GET /api/v1/health/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:38:45,718 log Unauthorized: /api/v1/health/
WARNING 2026-05-24 04:38:45,719 basehttp "GET /api/v1/health/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:40:13,308 log Unauthorized: /api/v1/health/
WARNING 2026-05-24 04:40:13,308 basehttp "GET /api/v1/health/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:40:14,342 log Unauthorized: /api/v1/health/
WARNING 2026-05-24 04:40:14,342 basehttp "GET /api/v1/health/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:40:35,248 log Unauthorized: /api/v1/health/
WARNING 2026-05-24 04:40:35,248 basehttp "GET /api/v1/health/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:40:36,274 log Unauthorized: /api/v1/health/
WARNING 2026-05-24 04:40:36,274 basehttp "GET /api/v1/health/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:42:52,554 log Unauthorized: /api/v1/health/
WARNING 2026-05-24 04:42:52,556 basehttp "GET /api/v1/health/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:42:53,587 log Unauthorized: /api/v1/health/
WARNING 2026-05-24 04:42:53,589 basehttp "GET /api/v1/health/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:43:23,916 log Unauthorized: /api/v1/health/
WARNING 2026-05-24 04:43:23,916 basehttp "GET /api/v1/health/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:43:24,940 log Unauthorized: /api/v1/health/
WARNING 2026-05-24 04:43:24,940 basehttp "GET /api/v1/health/ HTTP/1.1" 401 31
(venv) PS D:\Projects\InsightFlow\backend> python .\manage.py runserver
Performing system checks...

System check identified no issues (0 silenced).
May 24, 2026 - 04:43:52
Django version 5.2.14, using settings 'config.settings.development'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.

WARNING: This is a development server. Do not use it in a production setting. Use a production WSGI or ASGI server instead.
For more information on production servers see: https://docs.djangoproject.com/en/5.2/howto/deployment/
WARNING 2026-05-24 04:43:55,301 log Unauthorized: /api/v1/health/
WARNING 2026-05-24 04:43:55,304 basehttp "GET /api/v1/health/ HTTP/1.1" 401 31
WARNING 2026-05-24 04:43:56,336 log Unauthorized: /api/v1/health/
WARNING 2026-05-24 04:43:56,338 basehttp "GET /api/v1/health/ HTTP/1.1" 401 31
INFO 2026-05-24 04:44:15,805 basehttp "POST /api/v1/auth/login/ HTTP/1.1" 200 489
INFO 2026-05-24 04:44:15,956 basehttp "GET /api/v1/health/ HTTP/1.1" 200 43
