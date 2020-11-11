import React, { useEffect, useState } from 'react';

import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

import AlbumCard from '../../components/AlbumCard';

import { pinkFloydAlbunsArray } from '../../data/info';

import { Container, SearchInput, AlbumsView } from './styles';

const DashboardAlbum: React.FC = () => {
  // Album variables
  const [albumList, setAlbumList] = useState(pinkFloydAlbunsArray);
  const [albumFilter, setAlbumFilter] = useState('');

  const debounce: Subject<string> = new Subject<string>();

  useEffect(() => {
    debounce
      .pipe(debounceTime(300))
      .subscribe(filter => setAlbumFilter(filter));

    return () => {
      debounce.unsubscribe();
    };
  }, [debounce]);

  useEffect(() => {
    setAlbumList(
      albumFilter === ''
        ? pinkFloydAlbunsArray
        : pinkFloydAlbunsArray.filter(album => {
            return album.name.toLowerCase().includes(albumFilter.toLowerCase());
          }),
    );
  }, [albumFilter]);

  return (
    <Container>
      <SearchInput
        type="text"
        placeholder="Album..."
        onKeyUp={e => {
          debounce.next(e.currentTarget.value);
        }}
        onChange={e => {
          debounce.next(e.currentTarget.value);
        }}
      />

      <AlbumsView>
        {/* <Album>
          <strong>
            All Games
            <span>( 4 )</span>
          </strong>
        </h2> */}

        {albumList.map(album => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </AlbumsView>
    </Container>
  );
};

export default DashboardAlbum;
