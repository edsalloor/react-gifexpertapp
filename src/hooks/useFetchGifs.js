import { useEffect, useState } from 'react';

import { getGifs } from 'helpers/getGifs';

const useFetchGifs = category => {
  const [state, setState] = useState({
    data: [],
    isLoading: true
  });

  useEffect(() => {
    getGifs(category).then(imgs =>
      setState({
        data: imgs,
        isLoading: false
      })
    );
  }, [category]);

  return state;
};

export default useFetchGifs;
