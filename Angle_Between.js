function handAngle (date) {
  const minutesAng = date.getMinutes() * 6;
  const hoursAng = (date.getHours() * 30) + (date.getMinutes() * 0.5);
  const angle = Math.abs(minutesAng - hoursAng);
  const grad = Math.min(angle, 360 - angle);
	return grad * Math.PI / 180;
}
