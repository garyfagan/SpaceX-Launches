const formatDate = (date: string) => {
  return new Date(Date.parse(date)).toISOString().split('T')[0];
};

export default formatDate;