import { expect } from 'chai';

import tavuta from '../src/index.js';

describe('tavuta()', () => {
  it('yksinkertaiset sanat', () => {
    expect(tavuta('kala')).to.eql(['ka', 'la']);
    expect(tavuta('matala')).to.eql(['ma', 'ta', 'la']);
    expect(tavuta('siika')).to.eql(['sii', 'ka']);
  });

  it('tuplakonsonantit', () => {
    expect(tavuta('kissa')).to.eql(['kis', 'sa']);
    expect(tavuta('kurssi')).to.eql(['kurs', 'si']);
    expect(tavuta('kuitenkin')).to.eql(['kui', 'ten', 'kin']);
  });

  it('diftongit', () => {
    expect(tavuta('ainoa')).to.eql(['ai', 'no', 'a']);
  });

  it('vaikeammat sanat', () => {
    expect(tavuta('herttuaa')).to.eql(['hert', 'tu', 'aa']);
    expect(tavuta('köyhien')).to.eql(['köy', 'hi', 'en']);
    expect(tavuta('puolueita')).to.eql(['puo', 'lu', 'ei', 'ta']);
    expect(tavuta('korkea')).to.eql(['kor', 'ke', 'a']);
    expect(tavuta('myllyä')).to.eql(['myl', 'ly', 'ä']);
    expect(tavuta('kauniainen')).to.eql(['kau', 'ni', 'ai', 'nen']);
  });
});
