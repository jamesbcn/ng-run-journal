import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
{
   "id": 1,
   "name": 'Industrial Park',
   "date": new Date('06/04/2018'),
   "gpxData": '../../assets/gpx/1.gpx',
   "distance": 1.2,
   "comments": 'Cool and windy.'
 },
 {
   "id": 2,
   "name": 'Forest Route',
   "date": new Date('06/03/2018'),
   "gpxData": '../../assets/gpx/2.gpx',
   "distance": 3.2,
   "comments": 'Evening run.'
 },
 {
   "id": 3,
   "name": 'Lake Shore',
   "date": new Date('5/23/2018'),
   "gpxData": '../../assets/gpx/4.gpx',
   "distance": 8.4,
   "comments": 'Cool and windy by the lake.'
 }
]
