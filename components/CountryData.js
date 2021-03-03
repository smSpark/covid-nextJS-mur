import styled from 'styled-components';
import { useGetStats } from '../lib/hooks';

const CountryData = ({ country }) => {
    const { data, error, loading } = useGetStats(country);

    return (
        <Container>
            {error && <p className='message error'>Error...</p>}
            {loading && <p className='message'>Loading...</p>}
            {data && !!Object.keys(data).length && !error && !loading && (
                <>
                  <h2>Статистика</h2>
                  <div className='stats'>
                      <p>
                          <span>Всего случаев: </span> {data.confirmed.value}
                      </p>
                      <p>
                          <span>Смерти: </span> {data.deaths.value}
                      </p>
                      <p>
                          <span>Выздоровления: </span> {data.recovered.value}
                      </p>
                  </div>
                </>
            )}
          
        </Container>
    )
}

export default CountryData;

const Container = styled.div`
    width: 326px;
    height: 78px;
    position: relative;
    .message {
        position: absolute;
        left: 0;
        bottom: 0;
        margin: 0;
        font-size: 30px;
        color: #26c281;
    }
    .error {
        color: red;
    }
    .stats {
        display: flex;
        p {
            display: flex;
            flex-direction:column;
            margin: 0 10px 0 0;
        }
    }


`;