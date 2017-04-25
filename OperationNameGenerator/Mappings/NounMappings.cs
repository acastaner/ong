using OperationNameGenerator.BusinessModels;
using OperationNameGenerator.ViewModels;

namespace OperationNameGenerator.Mappings
{
    public static class NounMappings
    {
        public static NounDto ToNounDto(this Noun noun)
        {
            return new NounDto
            {
                Id = noun.Id,
                Value = noun.Value
            };
        }
        public static NounReadDto ToNounReadDto(this Noun noun)
        {
            return new NounReadDto
            {
                Value = noun.Value
            };
        }
    }
}
