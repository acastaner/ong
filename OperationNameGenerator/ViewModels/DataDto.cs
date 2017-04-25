using OperationNameGenerator.BusinessModels;
using OperationNameGenerator.Mappings;
using System.Collections.Generic;

namespace OperationNameGenerator.ViewModels
{
    public class DataDto
    {
        public IList<AdjectiveReadDto> Adjectives { get; set; }
        public IList<NounReadDto> Nouns { get; set; }

        public DataDto(IList<Adjective> adjectiveList, IList<Noun> nounList)
        {
            Adjectives = new List<AdjectiveReadDto>();
            Nouns = new List<NounReadDto>();
            foreach(Adjective adj in adjectiveList)
            {
                Adjectives.Add(adj.ToAdjectiveReadDto());
            }
            foreach(Noun noun in nounList)
            {
                Nouns.Add(noun.ToNounReadDto());
            }
        }
        public DataDto()
        {

        }
    }
}
