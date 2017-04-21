using OperationNameGenerator.BusinessModels;
using OperationNameGenerator.Mappings;
using System.Collections.Generic;

namespace OperationNameGenerator.ViewModels
{
    public class DataDto
    {
        public IList<AdjectiveDto> Adjectives { get; set; }
        public IList<NounDto> Nouns { get; set; }

        public DataDto(IList<Adjective> adjectiveList, IList<Noun> nounList)
        {
            Adjectives = new List<AdjectiveDto>();
            Nouns = new List<NounDto>();
            foreach(Adjective adj in adjectiveList)
            {
                Adjectives.Add(adj.toAdjectiveDto());
            }
            foreach(Noun noun in nounList)
            {
                Nouns.Add(noun.toNounDto());
            }
        }
        public DataDto()
        {

        }
    }
}
