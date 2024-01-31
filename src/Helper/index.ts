class Helper {
  static convertDurationToString(duration: number): string {
    const hours: number = Math.floor(duration / 3600);
    const minutes: number = Math.floor((duration % 3600) / 60);
    const seconds: number = Math.floor(duration % 60);

    const formatted_duration: string = `${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    return formatted_duration;
  }

  static isObjectEmpty(obj: any) {
    for (const key in Object.keys(obj)) {
      if (obj[key] !== null && obj[key] !== undefined && obj[key] !== "") {
        return false;
      }
    }
    return true;
  }
}

export default Helper;
