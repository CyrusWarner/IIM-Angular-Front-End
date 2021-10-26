import { FormControl } from "@angular/forms";

export function activityDateValidator(date:FormControl): {[key: string]:boolean} | null{
  const dateNow = new Date().getTime();
  // Replacing dateNow with team start date.
  if(date && (date.value > dateNow)){
    return {'ActivityDateBeforeTeamStartDate': true}
  }
  return null;
}
