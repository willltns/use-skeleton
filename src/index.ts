import React, { useEffect, useRef, useState } from 'react';

import styles from './index.module.css';

export type ReturnType<T> = [React.MutableRefObject<T | null>, React.Dispatch<React.SetStateAction<boolean>>, boolean];

function useSkeleton<T extends HTMLElement>(selector: string = '*'): ReturnType<T> {
	const ref = useRef<T | null>(null);

	const [animate, setAnimate] = useState<boolean>(true);

	useEffect(() => {
		if (!ref.current || !animate) return;

		const nodeList: NodeListOf<HTMLElement> = ref.current.querySelectorAll(selector);

		nodeList.forEach((node) => node.classList.add(styles.skeleton));

		return () => {
			nodeList.forEach((node) => node.classList.remove(styles.skeleton));
		};
	}, [animate, selector]);

	return [ref, setAnimate, animate];
}

export default useSkeleton;
