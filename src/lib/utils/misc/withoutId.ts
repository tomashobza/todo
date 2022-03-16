export function omitId<T>(obj: T): Omit<T, 'id'> {
	const newObj = { ...obj };

	delete newObj['id'];

	return newObj;
}
